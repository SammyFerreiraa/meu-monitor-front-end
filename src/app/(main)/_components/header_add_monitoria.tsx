/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  LocalizationProvider,
  renderTimeViewClock,
  DatePicker,
} from '@mui/x-date-pickers'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import 'dayjs/locale/pt-br'
import TrashIcon from './icons/Trash'
import AddIcon from './icons/adicionar'
import dayjs, { Dayjs } from 'dayjs'

interface HeaderAddMonitoria {
  onClose: () => void
}

const HeaderAddMonitoria: React.FC<HeaderAddMonitoria> = ({ onClose }) => {
  const [startTime, setStartTime] = React.useState<Dayjs | null>(null)
  const [endTime, setEndTime] = React.useState<Dayjs | null>(null)
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null)
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null)

  const [discipline, setDiscipline] = React.useState('')

  const handleStartTimeChange = (time: Dayjs | null) => setStartTime(time)
  const handleEndTimeChange = (time: Dayjs | null) => setEndTime(time)
  const handleStartDateChange = (date: Dayjs | null) => setStartDate(date)
  const handleEndDateChange = (date: Dayjs | null) => setEndDate(date)
  const handleResetTime = () => {
    setStartTime(null)
    setEndTime(null)
  }
  const handleResetDate = () => {
    setStartDate(null)
    setEndDate(null)
  }
  const handleResetDiscipline = () => setDiscipline('')

  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [isUnique, setIsUnique] = useState(false)
  const [formData, setFormData] = useState({
    titulo: '',
    disciplina: '',
    monitores: '',
    descricao: '',
    salas: '',
    blocos: '',
    andar: '',
    data: '',
    horario: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement
    if (name) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }))
    }
  }

  const handleUniqueChange = () => {
    setIsUnique(!isUnique)
    if (isUnique) {
      setSelectedDays([])
    }
  }

  const handleDayChange = (day: string) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day],
    )
  }

  const handleSave = () => {
    console.log(formData, selectedDays, isUnique)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overflow-hidden">
      <div className="relative bg-gray-100 w-[70vw] max-w-[580px] h-auto max-h-[94vh] p-5 box-border rounded-lg shadow-lg overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-4 text-gray-500"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex">
          <AddIcon />
          <h1 className="ml-2 text-2xl font-medium mb-3">Nova Monitoria</h1>
        </div>
        <div>
          <div className="space-y-1">
            <label
              htmlFor="titulo"
              className="text-sm font-medium items-center"
            >
              <h2 className="text-xl font-medium">Titulo</h2>
            </label>
            <ul className="flex items-center">
              <li className="shadow shadow-gray-500 rounded-md bg-zinc-300 w-screen">
                Almoço com código
              </li>
              <button onClick={handleResetDiscipline} className="ml-[4px]">
                <div>
                  <TrashIcon />
                </div>
              </button>
              <button className="">
                <div>
                  <AddIcon />
                </div>
              </button>
            </ul>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="disciplina"
              className="text-sm font-medium items-center"
            >
              <h2 className="text-xl font-medium">Disciplina</h2>
            </label>

            <ul className="flex items-center">
              <li className="shadow shadow-gray-500 rounded-md bg-zinc-300 w-screen">
                Programação Orientada a Objetos
              </li>
              <button onClick={handleResetDiscipline} className="ml-[4px]">
                <div>
                  <TrashIcon />
                </div>
              </button>
              <button>
                <div>
                  <AddIcon />
                </div>
              </button>
            </ul>
          </div>
          <div className="space-y-1">
            <label htmlFor="monitores" className="text-sm font-medium">
              <h2 className="text-xl font-medium">Monitores</h2>
            </label>

            <ul className="flex items-center">
              <li className="shadow shadow-gray-500 rounded-md bg-zinc-300 w-screen">
                Monitor 01
              </li>
              <button onClick={handleResetDiscipline} className="ml-[4px]">
                <div>
                  <TrashIcon />
                </div>
              </button>
              <button>
                <div>
                  <AddIcon />
                </div>
              </button>
            </ul>
          </div>
          <div>
            <div>
              <label htmlFor="descricao" className="text-sm font-medium">
                <h2 className="text-xl font-medium">Descrição</h2>
              </label>
            </div>
          </div>
          <TextField
            className="shadow shadow-gray-300 rounded-md bg-zinc-300  h-13"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            fullWidth
            rows={1}
          />
          <div>
            <div>
              <label htmlFor="sala" className="text-sm font-medium">
                <h2 className="text-xl font-medium">Sala</h2>
              </label>
            </div>
          </div>
          <div className="flex space-x-4">
            <span className="text-lg font-medium">Bloco</span>
            <div>
              <li className="shadow shadow-gray-500 rounded-md bg-zinc-300"></li>
            </div>
            <span className="text-lg font-medium">Sala</span>
            <div>
              <li className="shadow shadow-gray-500 rounded-md bg-zinc-300"></li>
            </div>
            <span className="text-lg font-medium">Andar</span>
            <div>
              <li className="shadow shadow-gray-500 rounded-md bg-zinc-300"></li>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="data" className="text-sm font-medium">
              <h2 className="text-xl font-medium">Data</h2>
            </label>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="pt-br"
            >
              <div className="flex space-x-2">
                <DatePicker
                  label="Data Inicial"
                  format="DD/MM/YYYY"
                  value={startDate}
                  onChange={handleStartDateChange}
                  sx={{ flexGrow: 1 }}
                />
                <DatePicker
                  label="Data Final"
                  format="DD/MM/YYYY"
                  value={endDate}
                  onChange={handleEndDateChange}
                  sx={{ flexGrow: 1 }}
                />
                <button onClick={handleResetDate} className="ml-3">
                  <TrashIcon />
                </button>
              </div>
            </LocalizationProvider>
          </div>

          <div className="flex flex-col space-y-2">
            <div>
              <label htmlFor="hora" className="text-sm font-medium">
                <h2 className="text-xl font-medium">Horário</h2>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="pt-br"
                >
                  <div className="flex items-center space-x-2">
                    <TimePicker
                      ampm={false}
                      label="Horário Inicial"
                      viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                      }}
                      value={startTime}
                      onChange={handleStartTimeChange}
                      sx={{ flexGrow: 1 }}
                    />

                    <TimePicker
                      ampm={false}
                      label="Horário Final"
                      viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                      }}
                      value={endTime}
                      onChange={handleEndTimeChange}
                      sx={{ flexGrow: 1 }}
                    />

                    <button onClick={handleResetTime} className="ml-3">
                      <div>
                        <TrashIcon />
                      </div>
                    </button>
                  </div>
                </LocalizationProvider>
              </label>
            </div>
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={isUnique} onChange={handleUniqueChange} />
              }
              label={<h2 className="text-xl font-medium">Monitoria Única</h2>}
            />
          </FormGroup>
          {!isUnique && (
            <div>
              <h2 className="text-xl font-medium">Dias</h2>
              <div className="flex flex-wrap gap-2">
                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map(
                  (day) => (
                    <FormControlLabel
                      key={day}
                      control={
                        <Checkbox
                          checked={selectedDays.includes(day)}
                          onChange={() => handleDayChange(day)}
                          size="small"
                        />
                      }
                      label={<span className="text-sm">{day}</span>}
                      className="text-sm"
                    />
                  ),
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="rounded bg-emerald-500 font-['Arial'] text-lg font-medium text-white shadow-md shadow-gray-400 px-4 py-2"
          >
            ADICIONAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderAddMonitoria
