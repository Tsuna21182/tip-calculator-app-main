import { useMemo, useState } from "react";

function useBill() {
  const [valor, setValor] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);
  const [selectedTip, setSelectedTip] = useState<number | null>(null);

  const TipAmount = useMemo(() => {
    if (person === 0) return 0;
    return Math.round(((valor * tip) / person) * 100) / 100;
  }, [tip, valor, person]);

  const TotalAmount = useMemo(() => {
    if (person === 0) return 0;
    return Math.round(((valor + valor * tip) / person) * 100) / 100;
  }, [valor, tip, person]);

  const Reset = () => {
    setValor(0);
    setTip(0);
    setPerson(0);
    setSelectedTip(null);
  };

  const handleTipSelect = (value: number) => {
    setTip(value);
    setSelectedTip(value);
  };

  const isResetDisabled = valor === 0 && tip === 0 && person === 0;

  return {
    TotalAmount,
    setValor,
    TipAmount,
    tip,
    setPerson,
    Reset,
    isResetDisabled,
    valor,
    person,
    handleTipSelect,
    selectedTip,
  };
}

export default useBill;
