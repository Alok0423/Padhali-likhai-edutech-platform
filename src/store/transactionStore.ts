import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Transaction {
  id: string;
  email: string;
  courses: Array<{
    id: number;
    title: string;
    price: number;
  }>;
  totalAmount: number;
  status: 'completed' | 'pending' | 'failed';
  paymentMethod: string;
  createdAt: string;
  transactionId: string;
}

export interface TransactionState {
  transactions: Transaction[];
  createTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt'>) => void;
  getTransactionsByEmail: (email: string) => Transaction[];
  getTransactionById: (id: string) => Transaction | undefined;
  updateTransactionStatus: (id: string, status: Transaction['status']) => void;
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: [],

      createTransaction: (transaction) => {
        const newTransaction: Transaction = {
          ...transaction,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          transactions: [...state.transactions, newTransaction],
        }));
      },

      getTransactionsByEmail: (email) => {
        return get().transactions.filter((txn) => txn.email === email);
      },

      getTransactionById: (id) => {
        return get().transactions.find((txn) => txn.id === id);
      },

      updateTransactionStatus: (id, status) => {
        set((state) => ({
          transactions: state.transactions.map((txn) =>
            txn.id === id ? { ...txn, status } : txn
          ),
        }));
      },
    }),
    {
      name: 'transaction-store',
    }
  )
);
