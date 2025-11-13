import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CourseInventory {
  courseId: number;
  totalSeats: number;
  enrolledCount: number;
  lastUpdated: string;
}

export interface InventoryState {
  inventory: Map<number, CourseInventory>;
  initializeInventory: (courseId: number, totalSeats: number) => void;
  enrollStudent: (courseId: number) => boolean;
  getAvailableSeats: (courseId: number) => number;
  isCourseFullyBooked: (courseId: number) => boolean;
  getEnrollmentPercentage: (courseId: number) => number;
}

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set, get) => ({
      inventory: new Map(),

      initializeInventory: (courseId, totalSeats) => {
        set((state) => {
          const newInventory = new Map(state.inventory);
          if (!newInventory.has(courseId)) {
            newInventory.set(courseId, {
              courseId,
              totalSeats,
              enrolledCount: 0,
              lastUpdated: new Date().toISOString(),
            });
          }
          return { inventory: newInventory };
        });
      },

      enrollStudent: (courseId) => {
        const state = get();
        const course = state.inventory.get(courseId);

        if (!course) {
          state.initializeInventory(courseId, 100); // Default capacity
          return state.enrollStudent(courseId);
        }

        if (course.enrolledCount >= course.totalSeats) {
          return false; // Course is full
        }

        set((state) => {
          const newInventory = new Map(state.inventory);
          const course = newInventory.get(courseId);
          if (course) {
            newInventory.set(courseId, {
              ...course,
              enrolledCount: course.enrolledCount + 1,
              lastUpdated: new Date().toISOString(),
            });
          }
          return { inventory: newInventory };
        });

        return true;
      },

      getAvailableSeats: (courseId) => {
        const course = get().inventory.get(courseId);
        if (!course) return 100; // Default capacity
        return course.totalSeats - course.enrolledCount;
      },

      isCourseFullyBooked: (courseId) => {
        const course = get().inventory.get(courseId);
        if (!course) return false;
        return course.enrolledCount >= course.totalSeats;
      },

      getEnrollmentPercentage: (courseId) => {
        const course = get().inventory.get(courseId);
        if (!course) return 0;
        return (course.enrolledCount / course.totalSeats) * 100;
      },
    }),
    {
      name: 'inventory-store',
      storage: {
        getItem: (name: string) => {
          const item = localStorage.getItem(name);
          if (!item) return null;
          try {
            const parsed = JSON.parse(item);
            return {
              ...parsed,
              state: {
                ...parsed.state,
                inventory: new Map(parsed.state.inventory || []),
              },
            };
          } catch {
            return null;
          }
        },
        setItem: (name: string, value: any) => {
          try {
            localStorage.setItem(
              name,
              JSON.stringify({
                ...value,
                state: {
                  ...value.state,
                  inventory: Array.from(value.state.inventory?.entries?.() || []),
                },
              })
            );
          } catch {
            // Fail silently
          }
        },
        removeItem: (name: string) => localStorage.removeItem(name),
      },
    }
  )
);
