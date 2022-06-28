import { useReducer, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Send } from "iconsax-react";

type SlideStateType = {
  page: number;
  direction: number;
};

const initialTitleState = "";
const initialDateState = "";

const reducer = (_: string, value: string) => {
  return value;
};

const CreateProgram = () => {
  const [title, dispatchTitle] = useReducer(reducer, initialTitleState);
  const [date, dispatchDate] = useReducer(reducer, initialDateState);

  const slideContents = [
    { name: "タイトル", value: title, dispatch: dispatchTitle },
    { name: "日付", value: date, dispatch: dispatchDate },
  ];

  const [slideState, setSlideState] = useState<SlideStateType>({
    page: 0,
    direction: 0,
  });

  const paginate = (direction: number) => {
    if (slideState.page == slideContents.length - 1 && direction == 1) return;
    if (slideState.page == 0 && direction == -1) return;
    setSlideState({ page: slideState.page + direction, direction });
  };

  const submit = () => {
    console.log(title, date);
  };

  const isEnable = (value: string) => {
    if (value == "") return false;
    return true;
  };

  return (
    <div className="w-screen h-screen overflow-hidden py-10">
      <motion.div
        key={slideState.page}
        custom={slideState.direction}
        className="flex flex-row w-[200%]"
        animate={{ marginLeft: `-${slideState.page * 100}%` }}
      >
        {slideContents.map((content, index) => (
          <div
            className="flex flex-col items-center w-full"
            key={`slide_${index}`}
          >
            <p className="font-bold text-3xl">{content.name}</p>
            <input
              className="w-3/4 border-b-2 border-slate-700 text-center outline-none text-2xl my-20"
              type="text"
              value={content.value}
              onChange={(e) => content.dispatch(e.target.value)}
            />
            {index == slideContents.length - 1 ? (
              <button onClick={submit}>
                <div
                  className={`flex items-center justify-center h-16 w-16 rounded-full text-slate-100 ${
                    isEnable(content.value)
                      ? "bg-violet-500 animate-bounce"
                      : "bg-violet-200"
                  }`}
                >
                  <Send size={28} />
                </div>
              </button>
            ) : (
              <button onClick={() => isEnable(content.value) && paginate(1)}>
                <div
                  className={`flex items-center justify-center h-16 w-16 rounded-full text-slate-100 ${
                    isEnable(content.value)
                      ? "bg-slate-700 animate-bounce"
                      : "bg-slate-300"
                  }`}
                >
                  <ArrowRight size={28} />
                </div>
              </button>
            )}
            {slideState.page != 0 && (
              <button onClick={() => paginate(-1)}>
                <div className="rounded-full border fixed top-4 left-4">
                  <ArrowLeft className="m-2 text-slate-400" />
                </div>
              </button>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CreateProgram;
