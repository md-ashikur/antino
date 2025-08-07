"use client";

import React from "react";
import { Typography, Card } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import DealsTable from "@/components/dashboard/DealsTable/DealsTable";

export default function page() {
  const cardData = [
    {
      title: "Total User",
      value: "1,245",
      icon: <UserOutlined style={{ fontSize: 32, color: "#6366f1" }} />,
      color: "#6366f1",
      iconBg: "rgba(99,102,241,0.21)",
      percent: 8.5,
      trend: "up",
      percentColor: "#10b981",
      desc: "Up from yesterday",
    },
    {
      title: "Total Order",
      value: "10293",
      icon: <ShoppingCartOutlined style={{ fontSize: 32, color: "#10b981" }} />,
      color: "#10b981",
      iconBg: "rgba(16,185,129,0.21)",
      percent: 1.3,
      trend: "up",
      percentColor: "#10b981",
      desc: "Up from past week",
    },
    {
      title: "Total Sales",
      value: "$89,000",
      icon: <DollarOutlined style={{ fontSize: 32, color: "#f59e0b" }} />,
      color: "#f59e0b",
      iconBg: "rgba(245,158,11,0.21)",
      percent: 4.3,
      trend: "down",
      percentColor: "#ef4444",
      desc: "Down from yesterday",
    },
    {
      title: "Total Pending",
      value: "7",
      icon: <ClockCircleOutlined style={{ fontSize: 32, color: "#ef4444" }} />,
      color: "#ef4444",
      iconBg: "rgba(239,68,68,0.21)",
      percent: 1.8,
      trend: "up",
      percentColor: "#10b981",
      desc: "Up from yesterday",
    },
  ];

  return (
   <div>
     <div>
      <Typography.Title level={2} style={{ margin: 0, fontWeight: 700 }}>
        Dashboard
      </Typography.Title>

      <div style={{ marginTop: 32 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {cardData.map((card, idx) => (
            <Card
              key={card.title}
              style={{
                borderRadius: 16,
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)",
                border: "none",
                background: "#FFFFFF",
                position: "relative",
              }}
          
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Typography.Title
                  level={5}
                  style={{ margin: 0, color: card.color, }}
                >
                  {card.title}
                </Typography.Title>

                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
              
                    color: "#202224",
                    
                  }}
                >
                  {card.value}
                </div>
              </div>

              <div style={{
                background: card.iconBg,
                padding: 16,
                borderRadius: '23px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {card.icon}
              </div>
              </div>
              <div style={{ color: "#64748b", marginTop: 16,  }}>
                {card.trend === "up" ? (
                  <ArrowUpOutlined
                    style={{ color: card.percentColor, marginRight: 4 }}
                  />
                ) : (
                  <ArrowDownOutlined
                    style={{ color: card.percentColor, marginRight: 4 }}
                  />
                )}
                <span style={{ color: card.percentColor, fontWeight: 600 }}>
                  {card.percent}%
                </span>{" "}
                {card.desc}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>


    <DealsTable/>
   </div>
  );
}
