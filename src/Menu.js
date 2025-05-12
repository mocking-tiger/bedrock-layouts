import { Inline } from "@bedrock-layout/inline";
import { InlineCluster } from "@bedrock-layout/inline-cluster";

export function Menu() {
  return (
    <Inline stretch={1} gutter="size3" switchAt="40rem">
      <p>CLB</p>
      <InlineCluster gutter="size3" justify="center">
        <a href="/#">Product</a>
        <a href="/#">Features</a>
        <a href="/#">Marketplace</a>
        <a href="/#">Company</a>
      </InlineCluster>
      <Inline gutter="size3" justify="end">
        <a href="/#">Search</a>
        <a href="/#">Cart</a>
      </Inline>
    </Inline>
  );
}
