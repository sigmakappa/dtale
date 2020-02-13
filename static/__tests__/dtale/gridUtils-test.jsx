import { buildDataProps } from "../../dtale/gridUtils";
import * as t from "../jest-assertions";

describe("gridUtils tests", () => {
  test("gridUtils: testing buildDataProps", done => {
    let dataProps = buildDataProps({ name: "foo", dtype: "foo" }, "bar", {
      columnFormats: {},
    });
    t.deepEqual({ raw: "bar", view: "bar", style: {} }, dataProps, "should build data props around unknown dtype");
    dataProps = buildDataProps({ name: "foo", dtype: "foo" }, undefined, {
      columnFormats: {},
    });
    t.equal(dataProps.view, "", "should handle undefined");
    done();
  });
});
