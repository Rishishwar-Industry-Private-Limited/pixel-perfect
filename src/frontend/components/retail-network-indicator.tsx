import { useMemo, useState } from "react";
import { MapPin, Store } from "lucide-react";
import { retailNetwork, storeFigure } from "@/frontend/data/retail-network";

export function RetailNetworkIndicator() {
  const [state, setState] = useState("");
  const [area, setArea] = useState("");
  const [district, setDistrict] = useState("");

  const states = useMemo(() => [...new Set(retailNetwork.map((row) => row.state))].sort(), []);
  const areas = useMemo(() => [...new Set(retailNetwork.filter((row) => !state || row.state === state).map((row) => row.area))].sort(), [state]);
  const districts = useMemo(() => [...new Set(retailNetwork.filter((row) => (!state || row.state === state) && (!area || row.area === area)).map((row) => row.district))].sort(), [state, area]);
  const matches = retailNetwork.filter((row) => (!state || row.state === state) && (!area || row.area === area) && (!district || row.district === district));
  const count = matches.reduce((total, row) => total + row.stores, 0);

  const onState = (value: string) => { setState(value); setArea(""); setDistrict(""); };
  const onArea = (value: string) => {
    setArea(value);
    setDistrict("");
    if (value && !state) setState(retailNetwork.find((row) => row.area === value)?.state ?? "");
  };
  const onDistrict = (value: string) => {
    setDistrict(value);
    if (value) {
      const row = retailNetwork.find((entry) => entry.district === value && (!state || entry.state === state) && (!area || entry.area === area));
      if (row) { setState(row.state); setArea(row.area); }
    }
  };

  return (
    <section className="border-b border-border bg-background py-5 sm:py-6" aria-labelledby="network-title">
      <div className="page-shell">
        <div className="mb-4 flex min-w-0 items-center gap-2 sm:mb-3">
          <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
          <h2 id="network-title" className="text-lg sm:text-xl">Check Our Retail Store Network</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          <label className="min-w-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">State
            <select aria-label="State" value={state} onChange={(event) => onState(event.target.value)} className="mt-1.5 h-11 w-full min-w-0 rounded-sm border border-border bg-card px-2 text-sm font-medium normal-case tracking-normal text-foreground sm:px-3">
              <option value="">All states</option>
              {states.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label className="min-w-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Area
            <select aria-label="Area" value={area} onChange={(event) => onArea(event.target.value)} className="mt-1.5 h-11 w-full min-w-0 rounded-sm border border-border bg-card px-2 text-sm font-medium normal-case tracking-normal text-foreground sm:px-3">
              <option value="">All areas</option>
              {areas.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label className="min-w-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">District
            <select aria-label="District" value={district} onChange={(event) => onDistrict(event.target.value)} className="mt-1.5 h-11 w-full min-w-0 rounded-sm border border-border bg-card px-2 text-sm font-medium normal-case tracking-normal text-foreground sm:px-3">
              <option value="">All districts</option>
              {districts.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <div className="min-w-0 border-l-2 border-primary pl-3" aria-live="polite" aria-label="Retail stores in selected location">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Retail stores</p>
            <p className="mt-1 flex items-center gap-2 font-display text-2xl leading-10 text-foreground"><Store className="size-5 shrink-0 text-primary" aria-hidden="true" />{count.toLocaleString("en-IN")}</p>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Figures cover the listed districts. Site-wide store figures are rounded down to the nearest 50 with a + sign.</p>
      </div>
    </section>
  );
}