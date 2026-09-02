import { StructureFlowCollection } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function DimensionalField() {
  return (
    <div className="shader-frame">
      <StructureFlowCollection
        variant="dimensional-field"
        mode="dark"
        hue={0}
        saturation={1.0}
        brightness={1.0}
      />
    </div>
  );
}
