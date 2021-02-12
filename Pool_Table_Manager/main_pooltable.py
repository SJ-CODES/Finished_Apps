import datetime 
datetime.datetime.now()


class Pool_table: 
    def __init__(self, table_number):
        self.table_number = table_number 
        self.availability = True
        self.start_time = None
        self.end_time = None  

    def check_out_time(self):
        self.start_time = datetime.datetime.now()
        self.availability = False
        
    def check_in_time(self):
        self.end_time = datetime.datetime.now()
        self.availability = True
        
    def used_time(self): 
        if self.start_time == None:
            return datetime.datetime.now() - datetime.datetime.now()
        elif self.end_time == None:
            return   datetime.datetime.now() - self.start_time 
        else: 
            return  self.end_time - self.start_time