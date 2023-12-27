import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";

export default function Graph() {
  const barHandle = {
    barClick: (data: any) => {
      console.log(data);
    },

    legendClick: (data: any) => {
      console.log(data);
    },
  };

  const pieHandle = {
    padClick: (data: any) => {
      console.log(data);
    },

    legendClick: (data: any) => {
      console.log(data);
    },
  };

  const data = [
    {
      id: "japan",
      color: "hsl(83, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 210,
        },
        {
          x: "helicopter",
          y: 283,
        },
        {
          x: "boat",
          y: 151,
        },
        {
          x: "train",
          y: 267,
        },
        {
          x: "subway",
          y: 204,
        },
        {
          x: "bus",
          y: 96,
        },
        {
          x: "car",
          y: 61,
        },
        {
          x: "moto",
          y: 198,
        },
        {
          x: "bicycle",
          y: 35,
        },
        {
          x: "horse",
          y: 258,
        },
        {
          x: "skateboard",
          y: 237,
        },
        {
          x: "others",
          y: 131,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(14, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 259,
        },
        {
          x: "helicopter",
          y: 214,
        },
        {
          x: "boat",
          y: 73,
        },
        {
          x: "train",
          y: 137,
        },
        {
          x: "subway",
          y: 59,
        },
        {
          x: "bus",
          y: 117,
        },
        {
          x: "car",
          y: 114,
        },
        {
          x: "moto",
          y: 43,
        },
        {
          x: "bicycle",
          y: 98,
        },
        {
          x: "horse",
          y: 138,
        },
        {
          x: "skateboard",
          y: 171,
        },
        {
          x: "others",
          y: 136,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(3, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 0,
        },
        {
          x: "helicopter",
          y: 288,
        },
        {
          x: "boat",
          y: 79,
        },
        {
          x: "train",
          y: 165,
        },
        {
          x: "subway",
          y: 122,
        },
        {
          x: "bus",
          y: 51,
        },
        {
          x: "car",
          y: 109,
        },
        {
          x: "moto",
          y: 290,
        },
        {
          x: "bicycle",
          y: 274,
        },
        {
          x: "horse",
          y: 39,
        },
        {
          x: "skateboard",
          y: 278,
        },
        {
          x: "others",
          y: 289,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(56, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 77,
        },
        {
          x: "helicopter",
          y: 9,
        },
        {
          x: "boat",
          y: 93,
        },
        {
          x: "train",
          y: 132,
        },
        {
          x: "subway",
          y: 100,
        },
        {
          x: "bus",
          y: 48,
        },
        {
          x: "car",
          y: 283,
        },
        {
          x: "moto",
          y: 182,
        },
        {
          x: "bicycle",
          y: 148,
        },
        {
          x: "horse",
          y: 180,
        },
        {
          x: "skateboard",
          y: 295,
        },
        {
          x: "others",
          y: 25,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(208, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 21,
        },
        {
          x: "helicopter",
          y: 162,
        },
        {
          x: "boat",
          y: 104,
        },
        {
          x: "train",
          y: 297,
        },
        {
          x: "subway",
          y: 259,
        },
        {
          x: "bus",
          y: 196,
        },
        {
          x: "car",
          y: 277,
        },
        {
          x: "moto",
          y: 168,
        },
        {
          x: "bicycle",
          y: 213,
        },
        {
          x: "horse",
          y: 241,
        },
        {
          x: "skateboard",
          y: 282,
        },
        {
          x: "others",
          y: 112,
        },
      ],
    },
  ];

  return (
    <>
      <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
        <ResponsiveBar
          /**
           * chart에 사용될 데이터
           */
          data={[
            { bottle: "365ml", cola: 1200, cidar: 1000, fanta: 1100 },
            { bottle: "500ml", cola: 2200, cidar: 2000, fanta: 2100 },
            { bottle: "1000ml", cola: 3200, cidar: 3000, fanta: 3100 },
          ]}
          /**
           * chart에 보여질 데이터 key (측정되는 값)
           */
          keys={["cola", "cidar", "fanta"]}
          /**
           * keys들을 그룹화하는 index key (분류하는 값)
           */
          indexBy="bottle"
          /**
           * chart margin
           */
          margin={{ top: 50, right: 100, bottom: 50, left: 80 }}
          /**
           * chart padding (bar간 간격)
           */
          padding={0.5}
          /**
           * chart 색상
           */
          colors={["olive", "brown", "orange"]} // 커스터하여 사용할 때
          // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
          /**
           * color 적용 방식
           */
          colorBy="id" // 색상을 keys 요소들에 각각 적용
          // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
          theme={{
            /**
             * label style (bar에 표현되는 글씨)
             */
            labels: {
              text: {
                fontSize: 18,
                fill: "#000000",
              },
            },
            /**
             * legend style (default로 우측 하단에 있는 색상별 key 표시)
             */
            legends: {
              text: {
                fontSize: 12,
                fill: "#000000",
              },
            },
            axis: {
              /**
               * axis legend style (bottom, left에 있는 글씨)
               */
              legend: {
                text: {
                  fontSize: 20,
                  fill: "#000000",
                },
              },
              /**
               * axis ticks style (bottom, left에 있는 값)
               */
              ticks: {
                text: {
                  fontSize: 16,
                  fill: "#000000",
                },
              },
            },
          }}
          /**
           * axis bottom 설정
           */
          axisBottom={{
            tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
            tickPadding: 5, // tick padding
            tickRotation: 0, // tick 기울기
            legend: "bottle", // bottom 글씨
            legendPosition: "middle", // 글씨 위치
            legendOffset: 40, // 글씨와 chart간 간격
          }}
          /**
           * axis left 설정
           */
          axisLeft={{
            tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
            tickPadding: 5, // tick padding
            tickRotation: 0, // tick 기울기
            legend: "price", // left 글씨
            legendPosition: "middle", // 글씨 위치
            legendOffset: -60, // 글씨와 chart간 간격
          }}
          /**
           * label 안보이게 할 기준 width
           */
          labelSkipWidth={36}
          /**
           * label 안보이게 할 기준 height
           */
          labelSkipHeight={12}
          /**
           * bar 클릭 이벤트
           */
          onClick={barHandle.barClick}
          /**
           * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
           */
          legends={[
            {
              dataFrom: "keys", // 보일 데이터 형태
              anchor: "bottom-right", // 위치
              direction: "column", // item 그려지는 방향
              justify: false, // 글씨, 색상간 간격 justify 적용 여부
              translateX: 120, // chart와 X 간격
              translateY: 0, // chart와 Y 간격
              itemsSpacing: 2, // item간 간격
              itemWidth: 100, // item width
              itemHeight: 20, // item height
              itemDirection: "left-to-right", // item 내부에 그려지는 방향
              itemOpacity: 0.85, // item opacity
              symbolSize: 20, // symbol (색상 표기) 크기
              effects: [
                {
                  // 추가 효과 설정 (hover하면 item opacity 1로 변경)
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
              onClick: barHandle.legendClick, // legend 클릭 이벤트
            },
          ]}
        />
      </div>
      <div style={{ width: "800px", height: "500px", margin: "50px auto" }}>
        <ResponsivePie
          /**
           * chart에 사용될 데이터
           */
          data={[
            { id: "cola", value: 324 },
            { id: "cidar", value: 88 },
            { id: "fanta", value: 221 },
          ]}
          /**
           * chart margin
           */
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          /**
           * chart 중간 빈공간 반지름
           */
          innerRadius={0.005}
          /**
           * pad 간격
           */
          padAngle={0}
          /**
           * pad radius 설정 (pad별 간격이 있을 시 보임)
           */
          cornerRadius={5}
          /**
           * chart 색상
           */
          colors={["olive", "brown", "orange"]} // 커스터하여 사용할 때
          // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
          /**
           * pad border 두께 설정
           */
          borderWidth={2}
          /**
           * link label skip할 기준 각도
           */
          arcLinkLabelsSkipAngle={0}
          /**
           * link label 색상
           */
          arcLinkLabelsTextColor="#000000"
          /**
           * link label 연결되는 선 두께
           */
          arcLinkLabelsThickness={2}
          /**
           * link label 연결되는 선 색상
           */
          arcLinkLabelsColor={{ from: "color" }} // pad 색상에 따라감
          /**
           * label (pad에 표현되는 글씨) skip할 기준 각도
           */
          arcLabelsSkipAngle={10}
          theme={{
            /**
             * label style (pad에 표현되는 글씨)
             */
            labels: {
              text: {
                fontSize: 14,
                fill: "#000000",
              },
            },
            /**
             * legend style (default로 하단에 있는 색상별 key 표시)
             */
            legends: {
              text: {
                fontSize: 12,
                fill: "#000000",
              },
            },
          }}
          /**
           * pad 클릭 이벤트
           */
          onClick={pieHandle.padClick}
          /**
           * legend 설정 (default로 하단에 있는 색상별 key 표시)
           */
          legends={[
            {
              anchor: "bottom", // 위치
              direction: "row", // item 그려지는 방향
              justify: false, // 글씨, 색상간 간격 justify 적용 여부
              translateX: 0, // chart와 X 간격
              translateY: 56, // chart와 Y 간격
              itemsSpacing: 0, // item간 간격
              itemWidth: 100, // item width
              itemHeight: 18, // item height
              itemDirection: "left-to-right", // item 내부에 그려지는 방향
              itemOpacity: 1, // item opacity
              symbolSize: 18, // symbol (색상 표기) 크기
              symbolShape: "circle", // symbol (색상 표기) 모양
              effects: [
                {
                  // 추가 효과 설정 (hover하면 textColor를 olive로 변경)
                  on: "hover",
                  style: {
                    itemTextColor: "olive",
                  },
                },
              ],
              onClick: pieHandle.legendClick, // legend 클릭 이벤트
            },
          ]}
        />
      </div>
      <div style={{ width: "800px", height: "500px", margin: "50px auto" }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          // axis 설정
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          // 포인트 설정
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          // 그리드 설정
          enableGridX={false}
          enableGridY={false}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
