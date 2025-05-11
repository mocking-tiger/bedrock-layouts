import { Stack } from "@bedrock-layout/stack";

export function Subscribe() {
  return (
    <Stack as="form" gutter="size7">
      <Stack gutter="size3">
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing
          products.
        </p>
      </Stack>

      <Stack gutter="size3">
        <Stack as="label" gutter="size2">
          Name
          <input type="text" />
        </Stack>

        <Stack as="label" gutter="size2">
          Email
          <input type="email" />
        </Stack>

        <button>Subscribe</button>
      </Stack>
    </Stack>
  );
}
