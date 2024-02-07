import "./ButtonComponent.scss";

type ButtonComponentProps = {
   text: string;
   variant: "primary" | "secondary";
};

function ButtonComponent({ text, variant }: ButtonComponentProps) {
   return (
      <button
         className={`button ${variant === "primary" ? "button__primary" : "button__secondary"}`}
      >
         {text}
      </button>
   );
}

export default ButtonComponent;
