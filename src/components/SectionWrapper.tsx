import { Box } from "@mantine/core";
import Image from "next/image";
import { ReactNode } from "react";

import QuadradoDireitaPreto from "@/assets/quadradoDireitaPreto.svg";
import QuadradoDireitaCinza from "@/assets/quadradoDireitaCinza.svg";
import QuadradoEsquerdaPreto from "@/assets/quadradoEsquerdaPreto.svg";
import QuadradoEsquerdaCinza from "@/assets/quadradoEsquerdaCinza.svg";

const assetMap = {
  quadradoDireitaCinza: QuadradoDireitaCinza,
  quadradoEsquerdaCinza: QuadradoEsquerdaCinza,
  quadradoDireitaPreto: QuadradoDireitaPreto,
  quadradoEsquerdaPreto: QuadradoEsquerdaPreto,
};

type AssetName = keyof typeof assetMap;

interface SectionWrapperProps {
  children: ReactNode;
  backgroundColor: string;
  leftAsset?: AssetName;
  rightAsset?: AssetName;
}

export function SectionWrapper({
  children,
  backgroundColor,
  leftAsset,
  rightAsset,
}: SectionWrapperProps) {
  const LeftAssetComponent = leftAsset ? assetMap[leftAsset] : null;
  const RightAssetComponent = rightAsset ? assetMap[rightAsset] : null;

  return (
    <Box
      component="section"
      style={{
        backgroundColor,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {LeftAssetComponent && (
        <Box
          style={{
            position: "absolute",
            top: "4vh",
            left: 0,
            transform: "translateX(-45%)",
            width: "35vw",
            maxWidth: "300px",
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <Image
            src={LeftAssetComponent}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      )}

      {RightAssetComponent && (
        <Box
          style={{
            position: "absolute",
            top: "35vh",
            right: 0,
            transform: "translateX(35%)",
            width: "35vw",
            maxWidth: "300px",
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <Image
            src={RightAssetComponent}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      )}

      <Box
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}