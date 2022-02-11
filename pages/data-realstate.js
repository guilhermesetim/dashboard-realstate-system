import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'ref', label: 'Ref', minWidth: 70 },
  { id: 'address', label: 'Endereço', maxWidth: 50 },
  
  {
    id: 'tenant',
    label: 'Locatário',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('pt-Br'),
  },
  {
    id: 'locator',
    label: 'Locador',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('pt-Br'),
  },
  {
    id: 'venc',
    label: 'Dia vencimento',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('pt-Br'),
  },
  {
    id: 'grossrent',
    label: 'Aluguel Bruto',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
  },
  {
    id: 'bonif',
    label: 'Bonificação',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
  },
  {
    id: 'liquidrent',
    label: 'Aluguel Líquido',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
  },
];

function createData(ref, address, tenant, locator, venc, grossrent) {
  const bonif = grossrent * 0.2;
  const liquidrent = grossrent * 0.8;
  return { ref, address, tenant, locator, venc, grossrent, bonif, liquidrent };
}

const rows = [
  createData('001', 'Av. Visconde de Guarapuava', 'Pedro Conde', 'Samir Graça',10, 2500),
  createData('002', 'Av. Silva Jardim', 'Yaqi Pontes', 'Amina Rodrigues',8,1800),
  createData('003', 'R. Martim Afonso', 'Emídio Fartaria', 'Arthur Souza',10,700),
  createData('004', 'R. Monsenhor Ivo ZanlorenziS', 'Cecília Borja', 'Walter Pureza',6,1100),
  createData('005', 'R. Alferes Ângelo Sampaio', 'Adriano Paiva', 'Cloé Madeira',10,4000),
  createData('006', 'R. Mariano Torres', 'Arman Carrilh', 'Angélico Boeira',15,980),
  createData('007', 'R. Cel Amazonas Marcondes', 'Ânia Pimentel', 'Daniela Castelo',8,4200),
  createData('008', 'R. Guilherme Pugsley', 'Maryam Quinta', 'Armindo Antas',10,980),
  createData('009', 'Alameda Cabral', 'Rossana Vilas', 'Walter Pureza',8,600),
  createData('010', 'Rua Anneliese Gellert Krigsner,', 'Lourenço Aragão', 'Samir Graça',5,4000),
  createData('011', 'Rua Aníbal SilvaS', 'Silvestre Veiga', 'Misael Valido',20,3900),
  createData('012', 'Rua Miguel Zeteski', 'Nayr Milheirão', 'Eder Nascimento',6,450),
  createData('013', 'Rua Laranjeiras', 'Armindo Antas', 'Misael Valido',8,900),
  createData('014', 'Travessa Rio Doce', 'Geovanna Goulart', 'Walter Pureza',10,7300),
  createData('015', 'Rua Rio São Luiz', 'Lea Nolasco', 'Rossana Vilas',10,600),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[7, 15, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
