interface Props {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const QuantitySelector: React.FC<Props> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => {
          setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
        }}
        disabled={quantity === 1}
        className="w-12 h-12 flex items-center justify-center bg-gray-200 disabled:opacity-25"
      >
        -
      </button>
      {quantity}
      <button
        onClick={() => {
          setQuantity((prevQuantity) => prevQuantity + 1);
        }}
        className="w-12 h-12 flex items-center justify-center bg-gray-200 disabled:opacity-25"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
