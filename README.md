## 📸 Screenshots

### Stepper
![Stepper Screenshot](./public/assets/screenshots/screenshot-1.png)

### Skip Cards & Selection Summary
![Skip Cards & Selection Summary Screenshot](./public/assets/screenshots/screenshot-2.png)

# 🗑️ Skip Booking App — Price & Feature Display Component

This project contains a clean, tested React component that displays **skip (waste container) booking features and pricing**. It demonstrates best practices around component design, separation of concerns, and accessibility.

---

## 📦 Feature — PriceSection Component

### What it does

- Computes the total price including VAT and formats as a localized currency string (`en-GB`, GBP).
- Visually displays that price within a styled `<section>` that supports hover and focus effects.

### Tech highlights

- **Separation of concerns**  
  Calculation logic is moved to a **pure utility function**:
  ```ts
  formatPriceWithVAT(priceBeforeVAT: number, vat: number): string
  ```
  Then reused inside the component wrapped in a `useMemo`, improving readability and testability.

- **React performance**  
  Wrapping the component in `memo` prevents unnecessary re-renders.

- **Accessibility & UX**  
  Uses Tailwind-based styling with hover/focus interaction states and proper ARIA labeling.

---

## ⚙️ How to use

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the project**:
   ```bash
   npm run dev
   ```

3. **Preview example usage**:  
   The `PriceSection.tsx` component expects props:
   ```ts
   interface PriceSectionProps {
     skip: {
       price_before_vat: number;
       vat: number;
       // ... other fields if needed
     };
     className?: string;
   }
   ```

---

## 🔨 Code structure

```
src
├─ common/
   ├─ components/
      ├─ stepper/ 
         │─Stepper.tsx 
         ├─ Stepper.types.ts
         ....
   ├─ api/              
   ├─ constants/
   ├─ types/         
   ├─ utils/  
      ├─ priceUtils.ts  
      ....
├─ pages/  
   ├─ skipHirePage/
      SkipHirePage.tsx
      ├─ components/
      ├─ hooks/
      ├─ types/         
      ├─ utils/   
├─ store/
   ├─ useStepperStore.tsx
App.tsx
---

## ✅ Why this approach

1. **Single Responsibility**  
   Utility logic (`formatPriceWithVAT`) separated from UI logic (`PriceSection`), making testing and readability straightforward.

2. **Reusability**  
   Utility and hook (`useFeatureItems`) can be reused across multiple components.

3. **Testability**  
   Pure functions are easy to unit test. Example:
   ```ts
   expect(formatPriceWithVAT(100, 20)).toBe("£120.00");
   ```

4. **Performance**  
   Components wrapped with `memo` and calculations wrapped in `useMemo` to prevent unnecessary recalculation or rendering.

5. **Clean Architecture**  
   Distinct `*.types.ts` files alongside components improve type sharing and code clarity.

---

## 🧪 Unit Tests (if added)

To test the currency formatter:
```ts
import { formatPriceWithVAT } from "./utils/formatPriceWithVAT";

test("formats 100 GBP + 20% VAT", () => {
  expect(formatPriceWithVAT(100, 20)).toBe("£120.00");
});
```

You can also test the `useFeatureItems` hook using [React Testing Library’s](https://testing-library.com/docs/react-hooks-testing-library/intro) hook utilities.

---

## 🚀 Final thoughts

This setup demonstrates:

- Clean, modular React components
- Effective use of **Typescript for types and interfaces**
- **Reusable helper utilities** outside the UI
- **Optimized performance** using `memo` and `useMemo`
- Readable, maintainable, and testable structure—suitable for professional-quality work

