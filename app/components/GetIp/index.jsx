"use client";
import { useCallback, useEffect } from "react";
import { handleSendIp } from "./sendIp";

function GetIp() {
  const getIp = useCallback(async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    await handleSendIp(data.ip);
  }, []);

  useEffect(() => {
    getIp();
  }, []);

  return <></>;
}

export default GetIp;
