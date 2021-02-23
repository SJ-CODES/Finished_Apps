from main_pooltable import *
pool_tables = []       
for index in range(1,13):
    pool_table = Pool_table(index)
    pool_tables.append(pool_table)

def display_menu ():
    print("*****************************************************")
    print("********WELCOME TO POOL HALL RENTAL********")

    print( "Press 1 if you want to get status of pool tables ")
    print( "Press 2 if you want to check-out pool table ")
    print( "Press 3 if you want to check-in pool table ")
    print( "Press e to exit ")
    print("*****************************************************")

while True: 
    display_menu()
    option = input( "Enter which option you want to choose: ")
    counter = 1
    if option == "1":
        for index in range(0, len(pool_tables)): 
            pool_table = pool_tables[index]
            if pool_table.availability == True: 
                print(f' Table: {pool_table.table_number} ---- Availabile: {pool_table.availability}')
            else: 
                print(f' Table: {pool_table.table_number} ---- Availabile: {pool_table.availability} --- Start Time: {pool_table.start_time} --- Time Used: {pool_table.used_time()}')
    elif option == "2":
        table_choice_out = int(input("Which table would you like to check-out: "))
        choice_out = pool_tables[table_choice_out -1] 
        choice_out.check_out_time()
        print(f"Table {table_choice_out} was Checked Out ")
        if pool_table.check_out_time() == False:
            print( "Table is not avaliable choose another one ")
                
    elif option == "3":
        
        table_choice_in = int(input("Which table would you like to check-in: "))
        pool_table = pool_tables[table_choice_in -1]
        pool_table.check_in_time()
        with open("pooltable_status.txt","a") as file_object:
            pool_table_st = (f' Table: {pool_table.table_number} ---- Availabile: {pool_table.availability} --- Start Time: {pool_table.start_time} --- End Time: {pool_table.end_time} --- Time Used: {pool_table.used_time()}')
            file_object.write(f"""{pool_table_st}
            """)
        print (f'Table {table_choice_in} was checked back in ')
        print(f' Table: {pool_table.table_number} ---- Availabile: {pool_table.availability} --- Start Time: {pool_table.start_time} --- End Time: {pool_table.end_time} --- Time Used: {pool_table.used_time()}')
            
    elif option == "e":
        break




