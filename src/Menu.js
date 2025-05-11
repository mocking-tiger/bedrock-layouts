import { Inline } from "@bedrock-layout/inline";

export function Menu() {
  return (
    <Inline stretch={1} gutter="size3">
      <p>CLB</p>
      <Inline gutter="size3" justify="center">
        <a href="/#">Product</a>
        <a href="/#">Features</a>
        <a href="/#">Marketplace</a>
        <a href="/#">Company</a>
      </Inline>
      <Inline gutter="size3">
        <a href="/#">Search</a>
        <a href="/#">Cart</a>
      </Inline>
    </Inline>
  );
}
