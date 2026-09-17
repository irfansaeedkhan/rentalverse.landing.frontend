declare module "class-variance-authority" {
  type Variants = Record<string, Record<string, string>>;
  type DefaultVariants = Record<string, string>;

  export function cva(
    base: string,
    options?: {
      variants?: Variants;
      defaultVariants?: DefaultVariants;
    }
  ): (props: Record<string, string>) => string;

  export type VariantProps<T> = T extends (props: infer P) => any ? P : never;
}
