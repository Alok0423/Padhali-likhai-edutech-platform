import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SupportTicket {
  id: string;
  email: string;
  subject: string;
  message: string;
  category: 'technical' | 'billing' | 'course' | 'general';
  status: 'open' | 'in-progress' | 'resolved';
  createdAt: string;
  responses: TicketResponse[];
}

export interface TicketResponse {
  id: string;
  author: 'user' | 'support';
  message: string;
  timestamp: string;
}

export interface SupportState {
  tickets: SupportTicket[];
  createTicket: (ticket: Omit<SupportTicket, 'id' | 'status' | 'createdAt' | 'responses'>) => void;
  addResponse: (ticketId: string, response: Omit<TicketResponse, 'id' | 'timestamp'>) => void;
  updateTicketStatus: (ticketId: string, status: SupportTicket['status']) => void;
  getTicketById: (id: string) => SupportTicket | undefined;
  getTicketsByEmail: (email: string) => SupportTicket[];
}

export const useSupportStore = create<SupportState>()(
  persist(
    (set, get) => ({
      tickets: [],

      createTicket: (ticket) => {
        const newTicket: SupportTicket = {
          ...ticket,
          id: Date.now().toString(),
          status: 'open',
          createdAt: new Date().toISOString(),
          responses: [],
        };
        set((state) => ({
          tickets: [...state.tickets, newTicket],
        }));
      },

      addResponse: (ticketId, response) => {
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === ticketId
              ? {
                  ...ticket,
                  responses: [
                    ...ticket.responses,
                    {
                      ...response,
                      id: Date.now().toString(),
                      timestamp: new Date().toISOString(),
                    },
                  ],
                }
              : ticket
          ),
        }));
      },

      updateTicketStatus: (ticketId, status) => {
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === ticketId ? { ...ticket, status } : ticket
          ),
        }));
      },

      getTicketById: (id) => {
        return get().tickets.find((ticket) => ticket.id === id);
      },

      getTicketsByEmail: (email) => {
        return get().tickets.filter((ticket) => ticket.email === email);
      },
    }),
    {
      name: 'support-store',
    }
  )
);
