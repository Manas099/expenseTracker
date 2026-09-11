import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CATEGORIES = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"]

export function AddTransactionDialog({ open, onOpenChange, onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const rawAmount = parseFloat(formData.get("amount"))
    const type = formData.get("type")

   onAdd?.({
    id: crypto.randomUUID(),
    date: formData.get("date"),
    type,
    description: formData.get("description"),
    category: formData.get("category"),
    amount: type === "Debit" ? -Math.abs(rawAmount) : Math.abs(rawAmount),
  })

  e.target.reset()
  onOpenChange(false)
}
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form onSubmit={handleSubmit}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogDescription>
              Enter the details of your transaction below.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" required />
            </Field>
            <Field>
              <Label htmlFor="type">Transaction type</Label>
              <select name="type" id="type"
               className="w-full h-9 rounded-md border border-input bg-white px-3 text-sm shadow-xs dark:bg-input/30">
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
               </select>
            </Field>

            <Field>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="e.g. Grocery shopping"
                required
              />
            </Field>

            <Field>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                required
                className="w-full h-9 rounded-md border border-input bg-white px-3 text-sm shadow-xs dark:bg-input/30"
              >
                <option value="">Select category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select> 
            </Field>

            <Field>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                required
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Add Transaction</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}