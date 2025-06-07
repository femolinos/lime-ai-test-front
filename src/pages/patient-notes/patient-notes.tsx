import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@/components'

export function PatientNotes() {
  const navigate = useNavigate()

  const [transcription, setTranscription] = useState(
    'The patient requires assistance with grooming. He ambulates independently but needs help with bathing and upper body dressing.',
  )

  const [summary, setSummary] = useState(
    'Patient requires assistance with bathing and dressing.',
  )

  return (
    <div className="my-2 flex w-full max-w-4xl flex-col gap-4">
      <Card>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Note for John Doe</h1>
              <p className="text-md">April 21, 2024</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Transcription</h1>
              <Textarea
                value={transcription}
                onChange={(e) => setTranscription(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Summary</h1>
              <Textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">OASIS Section G</h1>

              <Label htmlFor="m1800" className="text-lg">
                M1800. Grooming
              </Label>
              <Select>
                <SelectTrigger className="w-full" id="m1800">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">
                    0. Able to groom self unaided, with or without the use of
                    assistive devices or adapted methods.
                  </SelectItem>
                  <SelectItem value="1">
                    1. Grooming utensils must be placed within reach before able
                    to complete grooming activities.
                  </SelectItem>
                  <SelectItem value="2">
                    2. Someone must assist the patient to groom self.
                  </SelectItem>
                  <SelectItem value="3">
                    3. Patient depends entirely upon someone else for grooming
                    needs.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="m1810" className="text-lg">
                M1810. Current Ability to Dress Upper Body
              </Label>
              <Select>
                <SelectTrigger className="w-full" id="m1810">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">
                    0. Able to get clothes out of closets and drawers, put them
                    on and remove them from the upper body without assistance.
                  </SelectItem>
                  <SelectItem value="1">
                    1. Able to dress upper body without assistance if clothing
                    is laid out or handed to the patient.
                  </SelectItem>
                  <SelectItem value="2">
                    2. Someone must help the patient put on upper body clothing.
                  </SelectItem>
                  <SelectItem value="3">
                    3. Patient depends entirely upon another person to dress the
                    upper body.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="m1820" className="text-lg">
                M1820. Current Ability to Dress Lower Body
              </Label>
              <Select>
                <SelectTrigger className="w-full" id="m1820">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">
                    0. Able to obtain, put on, and remove clothing and shoes
                    without assistance.
                  </SelectItem>
                  <SelectItem value="1">
                    1. Able to dress lower body without assistance if clothing
                    and shoes are laid out or handed to the patient.
                  </SelectItem>
                  <SelectItem value="2">
                    2. Someone must help the patient put on undergarments,
                    slacks or nylons, and shoes.
                  </SelectItem>
                  <SelectItem value="3">
                    3. Patient depends entirely upon another person to dress the
                    lower body.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="m1830" className="text-lg">
                M1830. Bathing
              </Label>
              <Select>
                <SelectTrigger className="w-full" id="m1830">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">
                    0. Able tho bathe self in shower or tub independently,
                    including getting in and out of tub/shower.
                  </SelectItem>
                  <SelectItem value="1">
                    1. With the use of devices, is able to bathe self in shower
                    or tub independently, including getting in and out of the
                    tub/shower.
                  </SelectItem>
                  <SelectItem value="2">
                    2. Able to bathe in shower or tub with the intermittent
                    assistance of another person: a. for intermittent
                    supervision or encouragement or reminders, OR b. to get in
                    and out of the shower or tub, OR c. for washing difficult to
                    reach areas.
                  </SelectItem>
                  <SelectItem value="3">
                    3. Able to participate in bathing self in shower or tub, but
                    requires presence of another person throughout the bath for
                    assistance or supervision.
                  </SelectItem>
                  <SelectItem value="4">
                    4. Unable to use the shower or tub, but able to bathe self
                    independently with or without the use of devices at the
                    sink, in chair, or on commode.
                  </SelectItem>
                  <SelectItem value="5">
                    5. Unable to use the shower or tub, but able to participate
                    in bathing self in bed, at the sink, in bedside chair, or on
                    commode, with the assistance or supervision of another
                    person.
                  </SelectItem>
                  <SelectItem value="6">
                    6. Unable to participate effectively in bathing and is
                    bathed totally by another person.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="m1840" className="text-lg">
                M1840. Toilet Transferring
              </Label>
              <Select>
                <SelectTrigger className="w-full" id="m1840">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">
                    0. AAble to get to and from the toilet and transfer
                    independently with or without a device.
                  </SelectItem>
                  <SelectItem value="1">
                    1. When reminded, assisted, or supervised by another person,
                    able to get to and from the toilet and transfer.
                  </SelectItem>
                  <SelectItem value="2">
                    2. Unable to get to and from the toilet but is able to use a
                    bedside commode (with or without assistance).
                  </SelectItem>
                  <SelectItem value="3">
                    3. Unable to get to and from the toilet or bedside commode
                    but is able to use a bedpan/urinal independently.
                  </SelectItem>
                  <SelectItem value="4">
                    4. Is totally dependent in toileting.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="m1845" className="text-lg">
                M1845. Toileting Hygiene
              </Label>
              <Select>
                <SelectTrigger className="w-full" id="m1845">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">
                    0. Able to manage toileting hygiene and clothing management
                    without assistance.
                  </SelectItem>
                  <SelectItem value="1">
                    1. Able to manage toileting hygiene and clothing management
                    without assistance if supplies/implements are laid out for
                    the patient.
                  </SelectItem>
                  <SelectItem value="2">
                    2. Someone must help the patient to maintain toileting
                    hygiene and/or adjust clothing.
                  </SelectItem>
                  <SelectItem value="3">
                    3. Patient depends entirely upon another person to maintain
                    toileting hygiene.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="m1850" className="text-lg">
                M1850. Transferring
              </Label>
              <Select>
                <SelectTrigger className="w-full" id="m1850">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">
                    0. Able to independently transfer.
                  </SelectItem>
                  <SelectItem value="1">
                    1. Able to transfer with minimal human assistance or with
                    use of an assistive device.
                  </SelectItem>
                  <SelectItem value="2">
                    2. Able to bear weight and pivot during the transfer process
                    but unable to transfer self.
                  </SelectItem>
                  <SelectItem value="3">
                    3. Unable to transfer self and is unable to bear weight or
                    pivot when transferred by another person.
                  </SelectItem>
                  <SelectItem value="4">
                    4. Bedfast, unable to transfer but is able to turn and
                    position self in bed.
                  </SelectItem>
                  <SelectItem value="5">
                    5. Bedfast, unable to transfer and is unable to turn and
                    position self.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="m1860" className="text-lg">
                M1860. Ambulation/Locomotion
              </Label>
              <Select>
                <SelectTrigger className="w-full" id="m1860">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">
                    0. Able to independently walking on even and uneven surfaces
                    and negotiate stairs without railings (specifically: needs
                    no human assistance or assistive device).
                  </SelectItem>
                  <SelectItem value="1">
                    1. With the use of a one-handed device (for example, cane,
                    single crutch, hemi-walker), able to independently walk on
                    even and uneven surfaces and negotiate stairs with or
                    without railings.
                  </SelectItem>
                  <SelectItem value="2">
                    2. Requires use a two-handed device (for example, walker or
                    crutches) to walk alone on a level surface and/or requires
                    human supervision or assistance to negotiate stairs or steps
                    or uneven surfaces.
                  </SelectItem>
                  <SelectItem value="3">
                    3. Able to walk only with the supervision or assistance of
                    another person at all times.
                  </SelectItem>
                  <SelectItem value="4">
                    4. Chairfast, unable to ambulate but is able to wheel self
                    independently.
                  </SelectItem>
                  <SelectItem value="5">
                    5. Chairfast, unable to ambulate and is unable to wheel
                    self.
                  </SelectItem>
                  <SelectItem value="6">
                    6. Bedfast, unable to ambulate or be up in a chair.
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center justify-end gap-2">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Return
            </Button>
            <Button>Save Assessment</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
