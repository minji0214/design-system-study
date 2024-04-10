import React, { useState } from "react";
import DefaultTextField from "./DefaultTextField";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        onClick={() => {
          setEmail("");
        }}
        placeholder={"이메일을 입력해주세요"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        isError={false}
        id={"email"}
        alt={"delete"}
        iconPath={"/icons/ic-cancel.svg"}
        children={"이메일을 확인해 주세요"}
      />
      <Label htmlFor="email">비밀번호</Label>
      <DefaultTextField
        onClick={() => {
          setPassword("");
        }}
        placeholder={"비밀번호를 입력해주세요"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        isError={false}
        id={"password"}
        alt={"delete"}
        iconPath={"/icons/ic-cancel.svg"}
        children={"비밀번호를 확인해 주세요"}
      />
      <PrimaryButton
        isDisabled={!email || !password}
        onClick={() => {}}
        theme={"dark"}
      >
        로그인
      </PrimaryButton>
    </div>
  );
}
