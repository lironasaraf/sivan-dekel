
import { useState } from "react";
import { Calendar, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [courseType, setCourseType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !phone || !courseType) {
      toast({
        title: "שגיאה בטופס",
        description: "אנא מלא/י את כל השדות המסומנים בכוכבית",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log({ name, email, phone, message, courseType });
    
    // Show success message
    toast({
      title: "הטופס נשלח בהצלחה!",
      description: "תודה על פנייתך, ניצור איתך קשר בהקדם",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setCourseType("");
  };

  const courseOptions = [
    { value: "זום-א", label: "קורס א' זום" },
    { value: "זום-ב", label: "קורס ב' זום" },
    { value: "פרונטלי-א", label: "קורס א' פרונטלי" },
    { value: "פרונטלי-ב", label: "קורס ב' פרונטלי" },
    { value: "פרטי", label: "שיעור פרטי" },
    { value: "ייעוץ", label: "ייעוץ לטיול באתונה" },
    { value: "סדנה", label: "סדנת לימוד יוונית" },
    { value: "ספר", label: "ספר לימוד" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">צרו קשר</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            מעוניינים להתחיל ללמוד יוונית או לשמוע פרטים נוספים? מלאו את הטופס ואחזור אליכם בהקדם
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto border-greek-sand shadow-md">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6 text-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex justify-end items-center gap-1">
                    <span>שם מלא *</span>
                    <User className="h-4 w-4 text-greek-blue" />
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex justify-end items-center gap-1">
                    <span>אימייל *</span>
                    <Mail className="h-4 w-4 text-greek-blue" />
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex justify-end items-center gap-1">
                    <span>טלפון *</span>
                    <Phone className="h-4 w-4 text-greek-blue" />
                  </Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="courseType" className="flex justify-end items-center gap-1">
                    <span>סוג הקורס המבוקש *</span>
                    <Calendar className="h-4 w-4 text-greek-blue" />
                  </Label>
                  <RadioGroup
                    dir="rtl"
                    value={courseType}
                    onValueChange={setCourseType}
                    className="flex flex-col space-y-2"
                  >
                    {courseOptions.map((option) => (
                      <div key={option.value} className="flex items-center justify-end space-x-2 space-x-reverse">
                        <Label htmlFor={option.value}>{option.label}</Label>
                        <RadioGroupItem id={option.value} value={option.value} />
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="flex justify-end items-center gap-1">
                  <span>הודעה</span>
                  <MessageSquare className="h-4 w-4 text-greek-blue" />
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px] text-right"
                  dir="rtl"
                />
              </div>
              
              <div className="text-center pt-2">
                <Button type="submit" className="greek-button w-full md:w-auto">
                  שליחת טופס
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
