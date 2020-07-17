// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileWordTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FileWordTwoTone';

export default {
  name: 'IconFileWordTwoTone',
  displayName: 'FileWordTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileWordTwoToneSvg } },
      children,
    ),
};