// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function equal(this: any, ref: any, msg: string): any {
  return this.test({
    name: 'equal',
    exclusive: false,
    message: msg || '${path} precisa ser igual à ${reference}',
    params: {
      reference: ref.path,
    },
    test: function (value: any) {
      return value === this.resolve(ref);
    },
  });
}
