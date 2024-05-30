import CustomButton from "@/components/button";
import React from "react";

const WelcomePage = () => {
  return (
    <div
      style={{
        width: "100vvw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Br mha ma shi bu pyan doe</h1>
      <CustomButton
        title="Log Out"
        color="white"
        sz="md"
        isGradient
        gradientColor="linear-gradient(to right, #4880EC, #019CAD)"
        // backgroundColor="red"
      />
      {/* <button onClick={() => signOut({ callbackUrl: "/custom-logout-page" })}>
        Sign Out
      </button> */}
    </div>
  );
};

export default WelcomePage;
