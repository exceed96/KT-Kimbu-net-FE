"use client";

import { useEffect, useRef, useState } from "react";
import { useChatState } from "@/store/chatting";
import Message from "./Message";
import ChattingHeader from "./ChattingHeader";
import ChattingFooter from "./ChattingFooter";
import { useUserState } from "@/store/user";

export default function Chatting() {
  const messageEndRef = useRef<HTMLLIElement>(null);

  const { isShow, chatLog, setAllChatLog } = useChatState((state) => ({
    isShow: state.isShow,
    chatLog: state.chatLog,
    setChatLog: state.setChatLog,
    setAllChatLog: state.setAllChatLog,
  }));

  const { userData } = useUserState((state) => ({
    userData: state.userData,
  }));

  const [isVisible, setIsVisible] = useState(isShow);
  const [animate, setAnimate] = useState(false);

  // 모든 채팅 메세지 get api 핸들러
  const getChatLogs = async () => {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_CHAT_BASEURL}/chatLogs`)
    ).json();
    setAllChatLog(data);
    setTimeout(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    getChatLogs();
  }, []);

  useEffect(() => {
    const scrollToBottom = () => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const timeoutId = setTimeout(scrollToBottom, 0);

    return () => clearTimeout(timeoutId);
  }, [chatLog, isShow]);

  useEffect(() => {
    if (isShow) {
      setIsVisible(true);
      setAnimate(true);
    } else {
      setAnimate(false);
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isShow]);

  return (
    <>
      {isVisible && (
        <section
          className={`bg-black border-[2px] rounded-2xl flex flex-col w-1/5 fixed bottom-[3%] h-2/5 right-4 z-20 ${
            animate ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          <ChattingHeader />
          <ul className="h-4/5 text-white flex flex-col gap-3 overflow-y-auto px-5 py-3 scrollbar-hide">
            {chatLog &&
              chatLog.map((message) => {
                const isReportedByMe = message.report.some(
                  (report) => report.userId === userData?.userId
                );
                if (isReportedByMe) return null;
                return (
                  <Message
                    key={message.msgId}
                    nickname={message.nickname}
                    message={message.message}
                    time={message.time}
                    report={message.report}
                    msgId={message.msgId}
                    userId={message.userId}
                  />
                );
              })}
            <li ref={messageEndRef}></li>
          </ul>
          <ChattingFooter />
        </section>
      )}
    </>
  );
}
