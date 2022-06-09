import router from "next/router";

const Button = () => {
  const onClick = () => {
    router.push("/login");
  };

  return (
    <button
      className="flex items-center justify-center bg-blue-900 h-10 w-full text-white text-sm"
      onClick={onClick}
    >
      無料ではじめる →
    </button>
  );
};

export default Button;
