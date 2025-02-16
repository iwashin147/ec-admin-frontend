"use client";
import CounterForm from "@/features/counter/components/CounterForm";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/features/counter/slice/counterSlice";
import { CountFormInput } from "@/features/counter/types/CounterFormInput";
import { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";

interface CounterPageProps {
  children: ReactNode;
}

/**
 * reduxのカウントサンプルページ
 * @returns
 */
export default function CounterPage({}: CounterPageProps) {
  /**
   * 入力された数値のstate
   */
  const [] = useState<number>(0);

  /**
   * reduxのdispatch
   */
  const dispatch = useDispatch();

  /**
   * たすボタンのクリックイベントハンドラ
   * incrementアクションでstoreのcountをプラスする
   */
  function handleIncrementClick() {
    dispatch(increment());
  }

  /**
   * ひくボタンのクリックイベントハンドラ
   * decrementアクションでstoreのcountをマイナスする
   */
  function handleDecrementClick() {
    dispatch(decrement());
  }

  /**
   * 入力値を反映するボタンのクリックイベント
   * incrementByAmountアクションを呼び出して入力値をcountに加算する
   */
  function handleSubmmit(input: CountFormInput) {
    dispatch(incrementByAmount(input.count));
  }

  return (
    <CounterForm
      handleIncrementClick={handleIncrementClick}
      handleDecrementClick={handleDecrementClick}
      handleSubmmit={handleSubmmit}
    />
  );
}
