import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components'

interface NewNoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewNoteModal({ isOpen, onClose }: NewNoteModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label>Patient</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a patient" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Patient 1</SelectItem>
                <SelectItem value="2">Patient 2</SelectItem>
                <SelectItem value="3">Patient 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Upload audio file</Label>
            <div className="relative">
              <Input
                type="file"
                accept="audio/*"
                className="absolute inset-0 w-full cursor-pointer opacity-0"
              />
              <button
                type="button"
                className="border-input w-full rounded-md border bg-white px-4 py-2 text-sm font-medium text-black"
              >
                Upload
              </button>
            </div>
          </div>

          <Button>Create Note</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
