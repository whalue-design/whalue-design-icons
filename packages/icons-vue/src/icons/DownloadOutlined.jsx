// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DownloadOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DownloadOutlined';

export default {
  name: 'IconDownloadOutlined',
  displayName: 'DownloadOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DownloadOutlinedSvg } },
      children,
    ),
};