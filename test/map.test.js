import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const root = new URL("..", import.meta.url);
const catalog = JSON.parse(fs.readFileSync(new URL("catalog.json", root), "utf8"));

test("the public map has 12 tracks and 15 courses", () => {
  assert.equal(catalog.tracks.length, 12);
  assert.equal(catalog.courses.length, 15);
});

test("every course has a page, a capstone, and sourced books", () => {
  for (const course of catalog.courses) {
    const page = new URL(`courses/${course.id}.md`, root);
    assert.equal(fs.existsSync(page), true, course.id);
    assert.ok(course.project.title);
    assert.ok(course.outcomes.length >= 3);
    assert.ok(course.modules.length >= 1);
    for (const source of course.sources) {
      assert.equal(source.url.startsWith("https://"), true, source.title);
      assert.ok(source.license);
      assert.ok(source.access);
    }
  }
});

test("every track points at courses that exist", () => {
  const ids = new Set(catalog.courses.map((course) => course.id));
  for (const track of catalog.tracks) {
    assert.ok(track.courseIds.length >= 1);
    for (const id of track.courseIds) assert.equal(ids.has(id), true, id);
  }
});
