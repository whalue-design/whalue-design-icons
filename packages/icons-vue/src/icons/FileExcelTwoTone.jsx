// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileExcelTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FileExcelTwoTone';

export default {
  name: 'IconFileExcelTwoTone',
  displayName: 'FileExcelTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileExcelTwoToneSvg } },
      children,
    ),
};