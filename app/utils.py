import re


def id_tuit_text_plain(text,lis):
    regex = r"https://twitter.com/\w+/status/(\d+)"
    m = re.search(regex, text)
    if m:
        lis.append(m.group(1))
    return text

def fuente(text):
    regex = r"(for)|(while)|(function)|(document)|(var|let)|(onload)"
    m = re.search(regex,text)
    if m:
        return " "
    regex = r"(Fuente:)"
    m = re.search(regex,text)
    if m:
        try:
            text = text.split("Fuente:")
            text = text[0]
        except Exception:
            return text
    return text


def date_parser(date):
    return f"{date.day}/{date.month}/{date.year}"
