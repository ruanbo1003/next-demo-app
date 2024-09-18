'use client'

import { useState, ChangeEvent, useEffect } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { getData, addUser } from "@/actions/user"


export default function Home() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        salary: "",
    })
    const [users, setUsers] = useState<any[]>([]);

    const [msgOpen, setMsgOpen] = useState(false)
    const [msgContent, setMsgContent] = useState("")

    useEffect(() => {
        console.log("getUserList");
        getUserList();
    }, [])

    const getUserList = async () => {
        const data = await getData();
        setUsers(data)
        console.log('getUserList data:', data)
    }

    const onTabChange = async (tab: string) => {
        if(tab == 'list') {
            await getUserList();
        }
    }

    const isNumber = (val: string) => {
        if(val.length == 0) {
            return false;
        }
        return !isNaN(Number(val));
    }

    const onAddUser = async () => {
        console.log("onAddUser:", user)

        if(user.name.length <= 2) {
            setMsgContent("length of user name should greater 2.")
            setMsgOpen(true)
            return
        }
        console.log(user.email.length, user.email.includes("@"))
        if(user.email.length <= 4 || !user.email.includes("@")) {
            setMsgContent("invalid email address.")
            setMsgOpen(true)
            return
        }

        if(!isNumber(user.salary)) {
            setMsgContent("invalid user salary.")
            setMsgOpen(true)
            return
        }

        // add user
        await addUser(user.name, user.email, parseFloat(user.salary))
        setUser({name: "", email: "", salary: ""})
    }

    const handlerMsgOk = () => {
        setMsgOpen(false);
    }

    const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((previous) => ({...previous, name: e.target.value}));
    };
    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((previous) => ({...previous, email: e.target.value}));
    };
    const handleSalaryInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((previous) => ({...previous, salary: e.target.value}));
    };

    return (
      <div className="flex h-screen w-screen justify-center items-center">
          <div className="w-[500px] h-[600px] bg-stone-50 rounded-lg shadow-lg">
              <Tabs defaultValue="list" className="w-full h-full" onValueChange={(tab) => onTabChange(tab)}>
                  <TabsList className="grid h-[50px] w-full grid-cols-2">
                      <TabsTrigger value="list">List</TabsTrigger>
                      <TabsTrigger value="add">Add</TabsTrigger>
                  </TabsList>
                  <TabsContent value="list">
                      {/* user list tab */}
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead className="w-[100px]">Name</TableHead>
                                  <TableHead>Email</TableHead>
                                  <TableHead className="text-right">Salary</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              {users.map((user) => (
                                  <TableRow key={user.id}>
                                      <TableCell className="font-medium">{user.name}</TableCell>
                                      <TableCell>{user.email}</TableCell>
                                      <TableCell className="text-right">{user.salary}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TabsContent>
                  <TabsContent value="add" className="h-full">
                      {/* user add tab */}
                      <Card className="h-[550px]">
                          <CardHeader>
                              <CardTitle>Add user</CardTitle>
                              <CardDescription>
                                  Add a new user
                              </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-2">
                              <div className="space-y-1">
                                  <Label htmlFor="current">name</Label>
                                  <Input id="current" type="text" onChange={handleNameInput} value={user.name}/>
                              </div>
                              <div className="space-y-1">
                                  <Label htmlFor="new">email</Label>
                                  <Input id="new" type="text" onChange={handleEmailInput} value={user.email}/>
                              </div>
                              <div className="space-y-1">
                                  <Label htmlFor="new">salary</Label>
                                  <Input id="new" type="text" onChange={handleSalaryInput} value={user.salary}/>
                              </div>
                          </CardContent>
                          <CardFooter>
                              <Button className="bg-blue-500" onClick={onAddUser}>Add</Button>
                          </CardFooter>
                      </Card>
                  </TabsContent>
              </Tabs>
          </div>
              <Dialog open={msgOpen} onOpenChange={setMsgOpen}>
                  <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                          <DialogTitle>Invalid input</DialogTitle>
                          <DialogDescription>
                              {msgContent}
                          </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                          <Button type="submit" onClick={handlerMsgOk}>OK</Button>
                      </DialogFooter>
                  </DialogContent>
              </Dialog>
          <div>
          </div>
      </div>
  );
}
