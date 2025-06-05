"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCallDialog, setShowCallDialog] = useState(false)

  const handleCall = () => {
    setShowCallDialog(true)
  }

  const confirmCall = () => {
    window.open("tel:0583543456", "_self")
  }

  const handleZalo = () => {
    window.open("https://zalo.me/0583543456", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 space-y-3"
          >
            {/* Call Button */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Button
                onClick={handleCall}
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center space-x-2 px-4 py-3"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Gọi ngay</span>
              </Button>
            </motion.div>

            {/* Zalo Button */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Button
                onClick={handleZalo}
                className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center space-x-2 px-4 py-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Chat Zalo</span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"
          } text-white`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Pulse Animation */}
      {!isOpen && <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20"></div>}
      
      {/* Call Confirmation Dialog */}
      <AlertDialog open={showCallDialog} onOpenChange={setShowCallDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận cuộc gọi</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn muốn gọi đến số 0583 543 456 ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={confirmCall} className="bg-green-600 hover:bg-green-700 text-white">
              Gọi ngay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
