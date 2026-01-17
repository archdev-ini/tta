# Airtable Schema Definition

**Table Name:** `Events`

Create a table with exactly these columns. The **Field Name** must match exactly (case-sensitive) for the website to read it.

| Field Name      | Field Type       | Notes                                                                                              |
| :-------------- | :--------------- | :------------------------------------------------------------------------------------------------- |
| **Title**       | Single Line Text | The name of the event.<br>_Example: Architecture After School_                                     |
| **Description** | Long Text        | **CRITICAL:** Must include the program tag.<br>_Example: Join us for... [program: locked-in-2026]_ |
| **Start Date**  | Date & Time      | Set formatting to "ISO" or friendly.<br>_Example: 2026-02-15 6:00pm_                               |
| **End Date**    | Date & Time      | Used for calendar sorting.                                                                         |
| **Link**        | URL              | Link to Luma or Zoom page.                                                                         |
| **Type**        | Single Select    | Options: `Talk`, `Workshop`, `Panel`, `Social`, `Q&A`                                              |
| **Focus**       | Single Line Text | Short topic summary.<br>_Example: Emerging Trends_                                                 |

---

### Quick Setup Checklist

1.  [ ] Table name is "Events"
2.  [ ] Field names match exactly (Title, Description, etc.)
3.  [ ] Description includes `[program: locked-in-2026]` tag
4.  [ ] API Key and Base ID added to `.env.local`
