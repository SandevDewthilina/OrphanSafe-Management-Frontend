import { describe, expect, it } from "vitest";
import user from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import AssignSocialWorkers from "../components/cases/AssignSocialWorkers";
import React from "react";

describe("UtilityTest", () => {
  it("null input toest msg check", () => {
    const n = null;
    expect(n).toBeFalsy();
  });
});
