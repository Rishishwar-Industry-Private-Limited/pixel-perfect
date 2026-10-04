import { describe, expect, it } from "vitest";
import master from "@/frontend/data/retail-network.json";
import { retailNetwork, networkStores } from "@/frontend/data/retail-network";

describe("public retail network", () => {
  it("hides districts without stores and includes active districts", () => {
    expect(master.some((row) => row.district === "Betul" && row.stores === 0)).toBe(true);
    expect(retailNetwork.some((row) => row.district === "Betul")).toBe(false);
    expect(retailNetwork.some((row) => row.district === "Gwalior" && row.stores === 62)).toBe(true);
  });

  it("keeps the store total from the master unchanged", () => {
    expect(networkStores).toBe(6845);
  });
});