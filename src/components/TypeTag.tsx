interface ITypeTag {
  type: string;
}

export default function TypeTag({ type }: ITypeTag) {
  return (
    <div className="flex">
      <div className="flex"></div>
    </div>
  );
}
