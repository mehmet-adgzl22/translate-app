import { useMemo } from "react";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";

const LanguageSelect = ({
  sourceLang,
  targetLang,
  setSourceLang,
  setTargetLang,
  handleSwap,
}) => {
  const { isLoading, error, langs } = useSelector((store) => store.lang);

  const formatted = useMemo(
    () =>
      langs.map((i) => ({
        label: i.name,
        value: i.code,
      })),
    [langs]
  );

  return (
    <div className="flex gap-2 text-black">
      <ReactSelect
        value={sourceLang}
        onChange={(e) => setSourceLang(e)}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="flex-1"
      />

      <button
        onClick={handleSwap}
        className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white"
      >
        Değiş
      </button>

      <ReactSelect
        value={targetLang}
        onChange={(e) => setTargetLang(e)}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="flex-1"
      />
    </div>
  );
};

export default LanguageSelect;
