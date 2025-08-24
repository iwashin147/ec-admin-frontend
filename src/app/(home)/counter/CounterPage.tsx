"use client";
import CounterForm from "@/features/counter/components/CounterForm";
import { CountFormInput } from "@/features/counter/types/CounterFormInput";
import { ReactNode, useState } from "react";

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
   * たすボタンのクリックイベントハンドラ
   * incrementアクションでstoreのcountをプラスする
   */
  function handleIncrementClick() {

  }

  /**
   * ひくボタンのクリックイベントハンドラ
   * decrementアクションでstoreのcountをマイナスする
   */
  function handleDecrementClick() {

  }

  /**
   * 入力値を反映するボタンのクリックイベント
   * incrementByAmountアクションを呼び出して入力値をcountに加算する
   */
  function handleSubmit(input: CountFormInput) {

  }

  return (
    <CounterForm
      handleIncrementClick={handleIncrementClick}
      handleDecrementClick={handleDecrementClick}
      handleSubmit={handleSubmit}
    />
  );
}
