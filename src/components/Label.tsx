type Label = "username" | "password"; //확장성이 떨어짐
export interface ILabelProps {
  htmlFor: string;
  children: string;
}
export default function Label({ htmlFor, children }: ILabelProps) {
  return (
    <label className="text-sm text-primary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
