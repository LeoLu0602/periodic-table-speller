import TableRow from './TableRow';

export default function PeriodicTable() {
  return (
    <section className='hidden h-auto w-screen flex-col items-center justify-center py-32 min-[925px]:flex'>
      <h2 className='mb-8 w-screen text-center text-5xl font-bold text-teal-500'>
        Periodic Table
      </h2>
      <TableRow
        elements={[
          { symbol: 'H', number: 1 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: 'He', number: 2 },
        ]}
      />
      <TableRow
        elements={[
          { symbol: 'Li', number: 3 },
          { symbol: 'Be', number: 4 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: 'B', number: 5 },
          { symbol: 'C', number: 6 },
          { symbol: 'N', number: 7 },
          { symbol: 'O', number: 8 },
          { symbol: 'F', number: 9 },
          { symbol: 'Ne', number: 10 },
        ]}
      />
      <TableRow
        elements={[
          { symbol: 'Na', number: 11 },
          { symbol: 'Ma', number: 12 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: 'Al', number: 13 },
          { symbol: 'Si', number: 14 },
          { symbol: 'P', number: 15 },
          { symbol: 'S', number: 16 },
          { symbol: 'Cl', number: 17 },
          { symbol: 'Ar', number: 18 },
        ]}
      />
      <TableRow
        elements={[
          { symbol: 'K', number: 19 },
          { symbol: 'Ca', number: 20 },
          { symbol: 'Sc', number: 21 },
          { symbol: 'Ti', number: 22 },
          { symbol: 'V', number: 23 },
          { symbol: 'Cr', number: 24 },
          { symbol: 'Mn', number: 25 },
          { symbol: 'Fe', number: 26 },
          { symbol: 'Co', number: 27 },
          { symbol: 'Ni', number: 28 },
          { symbol: 'Cu', number: 29 },
          { symbol: 'Zn', number: 30 },
          { symbol: 'Ga', number: 31 },
          { symbol: 'Ge', number: 32 },
          { symbol: 'As', number: 33 },
          { symbol: 'Se', number: 34 },
          { symbol: 'Br', number: 35 },
          { symbol: 'Kr', number: 36 },
        ]}
      />
      <TableRow
        elements={[
          { symbol: 'Rb', number: 37 },
          { symbol: 'Sr', number: 38 },
          { symbol: 'Y', number: 39 },
          { symbol: 'Zr', number: 40 },
          { symbol: 'Nb', number: 41 },
          { symbol: 'Mo', number: 42 },
          { symbol: 'Tc', number: 43 },
          { symbol: 'Ru', number: 44 },
          { symbol: 'Rh', number: 45 },
          { symbol: 'Pd', number: 46 },
          { symbol: 'Ag', number: 47 },
          { symbol: 'Cd', number: 48 },
          { symbol: 'In', number: 49 },
          { symbol: 'Sn', number: 50 },
          { symbol: 'Sb', number: 51 },
          { symbol: 'Te', number: 52 },
          { symbol: 'I', number: 53 },
          { symbol: 'Xe', number: 54 },
        ]}
      />
      <TableRow
        elements={[
          { symbol: 'Cs', number: 55 },
          { symbol: 'Ba', number: 56 },
          { symbol: 'La', number: 57 },
          { symbol: 'Hf', number: 72 },
          { symbol: 'Ta', number: 73 },
          { symbol: 'W', number: 74 },
          { symbol: 'Re', number: 75 },
          { symbol: 'Os', number: 76 },
          { symbol: 'Ir', number: 77 },
          { symbol: 'Pt', number: 78 },
          { symbol: 'Au', number: 79 },
          { symbol: 'Hg', number: 80 },
          { symbol: 'Tl', number: 81 },
          { symbol: 'Pb', number: 82 },
          { symbol: 'Bi', number: 83 },
          { symbol: 'Po', number: 84 },
          { symbol: 'At', number: 85 },
          { symbol: 'Rn', number: 86 },
        ]}
      />
      <TableRow
        elements={[
          { symbol: 'Fr', number: 87 },
          { symbol: 'Ra', number: 88 },
          { symbol: 'Ac', number: 89 },
          { symbol: 'Rf', number: 104 },
          { symbol: 'Db', number: 105 },
          { symbol: 'Sg', number: 106 },
          { symbol: 'Bh', number: 107 },
          { symbol: 'Hs', number: 108 },
          { symbol: 'Mt', number: 109 },
          { symbol: 'Ds', number: 110 },
          { symbol: 'Rg', number: 111 },
          { symbol: 'Cn', number: 112 },
          { symbol: 'Nh', number: 113 },
          { symbol: 'Fl', number: 114 },
          { symbol: 'Mc', number: 115 },
          { symbol: 'Lv', number: 116 },
          { symbol: 'Ts', number: 117 },
          { symbol: 'Og', number: 118 },
        ]}
      />
      <div className='h-4' />
      <TableRow
        elements={[
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: 'Ce', number: 58 },
          { symbol: 'Pr', number: 59 },
          { symbol: 'Nd', number: 60 },
          { symbol: 'Pm', number: 61 },
          { symbol: 'Sm', number: 62 },
          { symbol: 'Eu', number: 63 },
          { symbol: 'Gd', number: 64 },
          { symbol: 'Tb', number: 65 },
          { symbol: 'Dy', number: 66 },
          { symbol: 'Ho', number: 67 },
          { symbol: 'Er', number: 68 },
          { symbol: 'Tm', number: 69 },
          { symbol: 'Tb', number: 70 },
          { symbol: 'Lu', number: 71 },
        ]}
      />
      <TableRow
        elements={[
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: '', number: 0 },
          { symbol: 'Th', number: 90 },
          { symbol: 'Pa', number: 91 },
          { symbol: 'U', number: 92 },
          { symbol: 'Np', number: 93 },
          { symbol: 'Pu', number: 94 },
          { symbol: 'Am', number: 95 },
          { symbol: 'Cm', number: 96 },
          { symbol: 'Bk', number: 97 },
          { symbol: 'Cf', number: 98 },
          { symbol: 'Es', number: 99 },
          { symbol: 'Fm', number: 100 },
          { symbol: 'Md', number: 101 },
          { symbol: 'No', number: 102 },
          { symbol: 'Lr', number: 103 },
        ]}
      />
    </section>
  );
}
