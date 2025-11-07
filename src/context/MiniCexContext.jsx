import React, { createContext, useContext, useState } from "react";

const MiniCexContext = createContext();
export const useMiniCex = () => useContext(MiniCexContext);

export const MiniCexProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { nama: "Mister Aloy", nim: "097-001", nilai: Array(10).fill(0), total: 0 },
    { nama: "Joni Jono", nim: "097-002", nilai: Array(10).fill(0), total: 0 },
    { nama: "Mardiana", nim: "097-003", nilai: Array(10).fill(0), total: 0 },
    { nama: "Shusi Susanti", nim: "097-004", nilai: Array(10).fill(0), total: 0 },
    { nama: "Mister Alex", nim: "097-005", nilai: Array(10).fill(0), total: 0 },
    { nama: "Putri Kartika", nim: "097-006", nilai: Array(10).fill(0), total: 0 },
    { nama: "Icha Aska", nim: "097-007", nilai: Array(10).fill(0), total: 0 },
  ]);

  const updateNilai = (nama, nilaiBaru) => {
    setStudents((prev) =>
      prev.map((m) =>
        m.nama === nama
          ? {
              ...m,
              nilai: nilaiBaru,
              total: nilaiBaru.reduce((a, b) => a + b, 0) / 10,
            }
          : m
      )
    );
  };

  return (
    <MiniCexContext.Provider value={{ students, updateNilai }}>
      {children}
    </MiniCexContext.Provider>
  );
};
