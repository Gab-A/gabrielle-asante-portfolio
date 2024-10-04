import classnames from "classnames";

export default function Button({ href, children, className }) {
  const baseClasses = "text-white py-2.5 text-lg cursor-pointer";

  const buttonClasses = classnames(`${baseClasses} ${className}`);

  const anchorTagClasses = classnames(`${baseClasses} ${className}`);

  if (href) {
    return (
      <a
        className={anchorTagClasses}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return <button className={buttonClasses}>{children}</button>;
  }
}
