import { useState } from "react";
import { Calendar, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [courseType, setCourseType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name,
          email,
          phone,
          courseType,
          message
        }
      });

      if (error) {
        throw error;
      }

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
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אירעה שגיאה בשליחת הטופס. אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const courseOptions = [
    { value: "זום-א", label: "רמת מתחילים א' זום" },
    { value: "זום-ב", label: "רמת מתחילים ב' זום" },
    { value: "פרונטלי-א", label: "קבוצת למידה פרונטלית חד שבועית רמת מתחילים א'" },
    { value: "פרונטלי-ב", label: "קבוצת למידה פרונטלית חד שבועית רמת מתחילים ב'" },
    { value: "פרטי", label: "שיעור פרטי" },
    { value: "סדנה", label: "סדנת לימוד יוונית" },
    { value: "ספר", label: "ספר לימוד" },
    { value: "ייעוץ", label: "ייעוץ לטיול באתונה" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading text-center">צרו קשר</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            מעוניינים להתחיל ללמוד יוונית או לשמוע פרטים נוספים? מלאו את הטופס ואחזור אליכם בהקדם
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto border-greek-sand shadow-md">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6 text-right" dir="rtl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="name" className="flex items-center gap-1 whitespace-nowrap">
                      <User className="h-4 w-4 text-greek-blue" />
                      <span>שם מלא *</span>
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-right flex-1"
                      dir="rtl"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="email" className="flex items-center gap-1 whitespace-nowrap">
                      <Mail className="h-4 w-4 text-greek-blue" />
                      <span>אימייל *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-right flex-1"
                      dir="rtl"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2 md:order-3">
                  <Label htmlFor="courseType" className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-greek-blue" />
                    <span>סוג הקורס המבוקש *</span>
                  </Label>
                  <RadioGroup
                    dir="rtl"
                    value={courseType}
                    onValueChange={setCourseType}
                    className="flex flex-col space-y-2"
                    disabled={isSubmitting}
                  >
                    {courseOptions.map((option) => (
                      <div key={option.value} className="flex items-center gap-2">
                        <RadioGroupItem id={option.value} value={option.value} />
                        <Label htmlFor={option.value} className="text-right flex-1" dir="rtl">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div className="space-y-2 md:order-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="phone" className="flex items-center gap-1 whitespace-nowrap">
                      <Phone className="h-4 w-4 text-greek-blue" />
                      <span>טלפון *</span>
                    </Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-right flex-1"
                      dir="rtl"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4 text-greek-blue" />
                  <span>הודעה</span>
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px] text-right"
                  dir="rtl"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="text-center pt-2">
                <Button 
                  type="submit" 
                  className="greek-button w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "שולח..." : "שליחת טופס"}
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
