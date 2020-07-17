// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileTextTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FileTextTwoTone';

export default {
  name: 'IconFileTextTwoTone',
  displayName: 'FileTextTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileTextTwoToneSvg } },
      children,
    ),
};