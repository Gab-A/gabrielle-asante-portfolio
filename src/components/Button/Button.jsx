import classnames from "classnames";

export default function Button({ children, className }) {
  const classes = classnames(
    `rounded-lg py-2.5 text-lg cursor-pointer mb-4 mt-3 active:shadow-md active:translate-y-2 ${className}`
  );
  return <button className={classes}>{children}</button>;
}
